from flask import Flask,request
import sqlite3
from flask_cors import CORS
import pickle
app=Flask(__name__)
# CORS(app)
HDFC_low=pickle.load(open('HDFC_low.pkl','rb'))
INFY_low=pickle.load(open('INFY_low.pkl','rb'))
RELIANCE_low=pickle.load(open('RELIANCE_low.pkl','rb'))
TCS_low=pickle.load(open('TCS_low.pkl','rb'))
TATASTEEL_high=pickle.load(open('TATASTEEL_high.pkl','rb'))
AARTIIND_high=pickle.load(open('AARTIIND_high.pkl','rb'))
MANAPPURAM_high=pickle.load(open('MANAPPURAM_high.pkl','rb'))
GSPL_high=pickle.load(open('GSPL_high.pkl','rb'))
MINDTREE_high=pickle.load(open('MINDTREE_high.pkl','rb'))
NESTLEIND_medium=pickle.load(open('NESTLEIND_medium.pkl','rb'))
FEDERALBNK_medium=pickle.load(open('FEDERALBNK_medium.pkl','rb'))
IRCTC_medium=pickle.load(open('IRCTC_medium.pkl','rb'))
M_MFIN_medium=pickle.load(open('M_MFIN_medium.pkl','rb'))
model=pickle.load(open("pickledmodelclust.pkl","rb"))

def insert(data):
    try:
        connection=sqlite3.connect('database.db')
        cur=connection.cursor()
        query=f"insert into features_clust({data});"
        cur.execute(query)
        return True
    except Exception as e:
        print(e)

def check(uid):
    try:
        connection=sqlite3.connect('database.db')
        cur=connection.cursor()
        query=f"select uid from features_clust where uid='{uid}';"
        test=cur.execute(query).fetchall()
        if test==uid:
            return True
        else:
            return False
    except Exception as e:
        print(e)

def retrieve(uid):
    try:
        connection=sqlite3.connect('database.db')
        cur=connection.cursor()
        query=f"select * from features_clust where uid='{uid};'"
        data=cur.execute(query).fetchall()
        return data
    except Exception as e:
        print(e)



def stocks(cluster):
    try:
        connection=sqlite3.connect('database.db')
        cur=connection.cursor()
        if cluster==0:
            arr=[HDFC_low,INFY_low,RELIANCE_low,TCS_low]
            res=[]
            for i in arr:
                query = f"select * from stocks where stock_name='{i}';"
                test=cur.execute(query).fetchall()
                res.append(i.predict(test))
            return res.sort()
        elif cluster==1:
            arr=[NESTLEIND_medium,FEDERALBNK_medium,IRCTC_medium,M_MFIN_medium]
            res=[]
            for i in arr:
                query = f"select * from stocks where stock_name='{i}';"
                test=cur.execute(query).fetchall()
                res.append(i.predict(test))
            return res.sort()
        elif cluster==2:
            arr=[TATASTEEL_high,AARTIIND_high,MANAPPURAM_high,GSPL_high,MINDTREE_high]
            res=[]
            for i in arr:
                query = f"select * from stocks where stock_name='{i}';"
                test=cur.execute(query).fetchall()
                res.append(i.predict(test))
            return res.sort()
    except Exception as e:
        print(e)


@app.route('/')
def home():
    return

@app.route('/dashboard',methods=['GET','POST'])
def dashboard():
    # retrieve()
    return {'test':"hello"}
@app.route('/register')
def register():
    data=request.get_json()
    print(data)
    # clustering
    # insert()

@app.route('/login')
def login():
    data = request.get_json()
    print(data)
    # check()



if __name__=="__main__":
    app.run(debug=True)
