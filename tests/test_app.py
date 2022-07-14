import unittest
import os
os.environ['TESTING'] = 'true'

from app import app
class AppTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
    
    def test_home(self):
        response = self.client.get("/home")
        assert response.status_code == 200
        html = response.get_data(as_text=True)
        assert "<h1>I'm Fanny Li</h1>" in html
        assert "<p>I am an aspiring Web Developer and UX/UI Designer. A little background information... I was born and raised in Brooklyn, New York. I enjoy working on web development projects and I hope to learn more through my internships and other experiences. I also enjoy programming and designing mobile applications.</p>" in html


    def test_timeline(self):
        #get
        response = self.client.get("/api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert "timeline_post" in json
        assert len(json["timeline_post"]) == 0

        #post
        response = self.client.post('api/timeline_post',
            data={
                "name": "test_app0",
                "email": "test_app0@email.com",
                "content": "test_app_content0"
            }
        )
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert json["name"] == "test_app0"
        assert json["email"] == "test_app0@email.com"
        assert json["content"] == "test_app_content0"

        #getting what is posted
        response = self.client.get("/api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert "timeline_post" in json
        assert len(json["timeline_post"]) == 1

    def test_malformed_timeline_post(self):
        # POST request missing name
        response = self.client.post("/api/timeline_post", data={"email": "john@example.com", "content": "Hello world, I'm John!"})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid name" in html
        
        # POST request with empty content
        response = self.client.post("/api/timeline_post", data={"name": "John Doe",
            "email": "john@example.com",
            "content": ""})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid content" in html


        # POST request with malformed email
        response = self.client.post("/api/timeline_post", data= {"name": "John Doe", "email": "not-an-email", "content" :"Hello world, I'm John!"})
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid email" in html

        self.client.delete("/api/timeline_post")