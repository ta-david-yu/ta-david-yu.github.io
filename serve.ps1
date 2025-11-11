$listener = [System.Net.Sockets.TcpListener]8080
$listener.Start()
Write-Host "Serving files in $(Get-Location) on http://localhost:8080"
while ($true) {
  $client = $listener.AcceptTcpClient()
  $stream = $client.GetStream()
  $reader = New-Object IO.StreamReader($stream)
  $request = $reader.ReadLine()
  $file = ($request -split ' ')[1].TrimStart('/')
  if (-not $file) { $file = 'index.html' }
  if (Test-Path $file) {
    $bytes = [IO.File]::ReadAllBytes($file)
    $header = "HTTP/1.1 200 OK`r`nContent-Length: $($bytes.Length)`r`n`r`n"
    $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($bytes, 0, $bytes.Length)
  } else {
    $msg = "HTTP/1.1 404 Not Found`r`n`r`nFile not found"
    $bytes = [Text.Encoding]::ASCII.GetBytes($msg)
    $stream.Write($bytes, 0, $bytes.Length)
  }
  $stream.Close()
  $client.Close()
}