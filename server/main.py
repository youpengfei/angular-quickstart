import tornado.ioloop
import tornado.web
from tornado import web


def make_app():
    return tornado.web.Application([
        (r"/*.js", web.StaticFileHandler),
        (r"/", web.StaticFileHandler, {"path": "/"}),
    ])



if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
