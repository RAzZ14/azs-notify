exports('Notify', function(source, message, type)
    TriggerClientEvent('azs-notify:server:send', source, type, message)
end)

exports('Success', function(source, message)
    TriggerClientEvent('azs-notify:server:send', source, 'success', message)
end)

exports('Warning', function(source, message)
    TriggerClientEvent('azs-notify:server:send', source, 'warning', message)
end)

exports('Error', function(source, message)
    TriggerClientEvent('azs-notify:server:send', source, 'error', message)
end)

exports('Info', function(source, message)
    TriggerClientEvent('azs-notify:server:send', source, 'info', message)
end)
