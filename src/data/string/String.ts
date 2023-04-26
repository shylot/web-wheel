const onlyFirstCharUpper = (val: string) => {
    val = val.toLowerCase().replace(/(.{1})(.{*})/, '');
}
