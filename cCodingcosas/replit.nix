{ pkgs }: {
	deps = [
   pkgs.nano
   pkgs.openssh
   pkgs.cowsay
   pkgs.lsd
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.yarn
	];
}