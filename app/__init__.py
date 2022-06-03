import os
from flask import Flask, render_template, request, url_for
from dotenv import load_dotenv
from app.data import header_info, about_info, images, workExperience
load_dotenv()
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', title="MLH Fellow", url=os.getenv("URL"), header_info=header_info, about_info=about_info, images=images, workExperience=workExperience)

@app.route('/map')
def map():
    return render_template('map.html')

@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                 endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)

if __name__ == "__main__":
    app.run(debug=True)