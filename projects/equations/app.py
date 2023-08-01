# Alessandro Valitutti

#########################################################################
#                      IMPORT

# import the Flask class from the flask module
from flask import Flask, render_template, request, jsonify

###############################################################################
#                     GLOBAL VARIABLES

#global a

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
    return render_template('index.html')  

@app.route('/app1')
def app1():
    return render_template('app1.html')  

@app.route('/app2')
def app2():
    return render_template('app2.html')  

@app.route('/app3')
def app3():
    return render_template('app3.html')  

@app.route('/app3_get_parameters', methods=['POST'])
def app3_get_parameters():
    if request.method == 'POST':
        import app3
#        x1 = app3.get_x1()
#        x2 = app3.get_x2()
#        a = app3.get_a()
#        b = app3.get_b(a, x1, x2)
#        c = app3.get_c(a, x1, x2)
#        output = str(a) + ' ' + str(b) + ' ' + str(c)
        output = app3.get_par_string()
        return output

@app.route('/app4')
def app4():
    return render_template('app4.html')  

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)

#************************************************************************




