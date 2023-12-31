# Alessandro Valitutti



#########################################################################
#                      IMPORT

# import the Flask class from the flask module
from flask import Flask, render_template, request, jsonify

##############################################################################
#                     GLOBAL VARIABLES


#########################################################################
#                      FUNCTIONS
##############################################################################
#                    INSTRUCTIONS
#------------------------------------------------------------------------

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/')
def home():
    return "Hello, World!"  # return a string

@app.route('/welcome')
def welcome():
    return render_template('index.html')  # render a template

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)

#************************************************************************




