function web_tool_csa_convert() {
    var cmd = document.getElementById("command").value;
    var cmd_r = cmd.replace(/§/g,"\\\\u00a7");
    var converted = '/setblock ~ ~ ~ minecraft:standing_sign 0 replace {Text1:"{\\"text\\":\\"看板をクリック\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/setblock ~ ~ ~ minecraft:command_block 0 replace {TrackOutput:false,Command:\\\\\\"'+cmd_r+'\\\\\\"}\\"}}",Text2:"{\\"text\\":\\"\\"}",Text3:"{\\"text\\":\\"\\"}",Text4:"{\\"text\\":\\"\\"}"}';
    document.getElementById("converted").value = converted;
}