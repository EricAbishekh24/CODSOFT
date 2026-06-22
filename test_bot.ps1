$tests = @(
    @{msg="hello"; desc="Greeting"},
    @{msg="hey how are you"; desc="How are you"},
    @{msg="thanks for helping"; desc="Thanks"},
    @{msg="I feel sad and lonely"; desc="Feelings/Sad"},
    @{msg="I'm doing great today"; desc="Happy"},
    @{msg="what is your name"; desc="Bot name"},
    @{msg="random gibberish xyzzy"; desc="Fallback"}
)

foreach ($t in $tests) {
    $payload = @{ message = $t.msg; character = "kai"; userName = "Erica" } | ConvertTo-Json
    try {
        $res = Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/chat" -Method Post -Body $payload -ContentType 'application/json' -TimeoutSec 10
        Write-Output "--- $($t.desc) ---"
        Write-Output "Input: $($t.msg)"
        Write-Output "Intent: $($res.intent)"
        $preview = $res.text
        if ($preview.Length -gt 120) { $preview = $preview.Substring(0,120) + '...' }
        Write-Output "Reply: $preview"
        Write-Output ""
    } catch {
        Write-Output "--- $($t.desc) --- FAILED: $($_.Exception.Message)"
    }
}
