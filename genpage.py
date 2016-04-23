from subprocess import check_output

def main():
    content = {}

    for c in 'contact', 'cv', 'work':
        with open(c + '.md') as f:
            content[c] = check_output(['pandoc', '-t', 'html'], stdin=f).decode(encoding='UTF-8')

    with open('template.html') as f:
        template = f.read()

    template = template.replace('{','{{')
    template = template.replace('}','}}')
    template = template.replace('{{%','{')
    template = template.replace('%}}','}')

    with open('index.html', 'w') as out:
        out.write(template.format(**content))


if __name__ == '__main__':
    main()
