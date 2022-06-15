import glob
import re

pattern = re.compile("[\u0600-\u06FF][\u0600-\u06FF]+")

for f in glob.glob('./**/*.md', recursive=True):
    for i, line in enumerate(open(f)):
        for match in re.finditer(pattern, line):
            print('Found on %s on line %s: %s' % (f, i+1, match.group()))
