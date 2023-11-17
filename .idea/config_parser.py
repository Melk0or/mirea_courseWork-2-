from sly import Lexer, Parser

class ConfigLexer(Lexer):
    tokens = {NAME, NUMBER, STRING, LPAREN, RPAREN, COMMENT}
    ignore = ' \t'

    NAME = r'[a-zA-Z_][a-zA-Z0-9_]*'
    NUMBER = r'\d+'
    STRING = r'"[^"]*"'
    LPAREN = r'\('
    RPAREN = r'\)'
    COMMENT = r';.*'

    def error(self, t):
        self.index += 1

class ConfigParser(Parser):
    tokens = ConfigLexer.tokens

    @_('s_exp_list')
    def program(self, p):
        return p.s_exp_list

    @_('s_exp')
    def s_exp_list(self, p):
        return p.s_exp

    @_('s_exp s_exp_list')
    def s_exp_list(self, p):
        if p.s_exp_list is None:
            return [p.s_exp]
        else:
            return [p.s_exp] + p.s_exp_list

    @_('data')
    def s_exp(self, p):
        return p.data

    @_('LPAREN s_exp_list RPAREN')
    def s_exp(self, p):
        return p.s_exp_list

    @_('NUMBER')
    def data(self, p):
        return int(p.NUMBER)

    @_('STRING')
    def data(self, p):
        return p.STRING[1:-1]

    @_('NAME')
    def data(self, p):
        return p.NAME

if __name__ == '__main__':
    lexer = ConfigLexer()
    parser = ConfigParser()

    with open('config.txt', 'r') as file:
        config_text = file.read()
        result = parser.parse(lexer.tokenize(config_text))
        print(result)
