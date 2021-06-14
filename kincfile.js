let project = new Project('Compiler');

project.cmd = true;
project.kore = false;
project.addIncludeDir('Libraries/tree-sitter/lib/include')
project.addIncludeDir('Libraries/tree-sitter/lib/src')
project.addFiles(
    'Libraries/tree-sitter/lib/src/lib.c',
    'Libraries/tree-sitter-c/src/parser.c'
)
project.addFile('Sources/**');
project.setDebugDir('Deployment');

resolve(project);
