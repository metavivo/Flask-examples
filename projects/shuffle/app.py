# Alessandro Valitutti



#########################################################################
#                      IMPORT

from flask import Flask, render_template, request, jsonify

##############################################################################
#                     GLOBAL VARIABLES


#########################################################################
#                      FUNCTIONS
##############################################################################
#                    INSTRUCTIONS
#------------------------------------------------------------------------

app = Flask(__name__)

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

@app.route('/app4')
def app4():
    return render_template('app4.html')  

if __name__ == '__main__':
    app.run(debug=True)

#************************************************************************




