RegisterNetEvent('azs-notify:server:send', function(type, message)
    local notifDuration = Config.DefaultDuration
    
    SendNUIMessage({
        action = 'notify',
        type = type,
        message = message,
        duration = notifDuration,
        config = {
            play_sound = Config.PlaySound,
            sound_file = Config.SoundFile,
            sound_volume = Config.SoundVolume,
            position = Config.Position
        }
    })
end)

exports('Notify', function(message, type)
    TriggerEvent('azs-notify:server:send', type, message)
end)

exports('Success', function(message)
    TriggerEvent('azs-notify:server:send', 'success', message)
end)

exports('Warning', function(message)
    TriggerEvent('azs-notify:server:send', 'warning', message)
end)

exports('Error', function(message)
    TriggerEvent('azs-notify:server:send', 'error', message)
end)

exports('Info', function(message)
    TriggerEvent('azs-notify:server:send', 'info', message)
end)

RegisterCommand('testarnotify', function()
    exports['azs-notify']:Success('This is a success message.')
    Wait(1000)
    exports['azs-notify']:Warning('This is a warning message.')
    Wait(1000)
    exports['azs-notify']:Error('This is an error message.')
    Wait(1000)
    exports['azs-notify']:Info('This is an info message.')
end, false)