import pyodbc
from configparser import ConfigParser
from datetime import datetime

config_object = ConfigParser()
config_object.read("config.ini")

server = config_object['SETUP']['server']
database = config_object['SETUP']['database']
username = config_object['SETUP']['username']
password = config_object['SETUP']['password']
driver = config_object['SETUP']['driver']
port = config_object['SETUP']['port']


class DBOperations():

    def connection(self):
        connection = pyodbc.connect('DRIVER=' + driver + ';SERVER=' + server + ';PORT=' + port + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
        return connection

    def get_all_scores(self):
        scores = []
        query = '''
                SELECT * FROM telemed_users;
                '''

        conn = self.connection()
        cursor = conn.cursor()
        cursor.execute(query)
        columns = [desc[0] for desc in cursor.description]

        for row in cursor.fetchall():
            row_dict = dict(zip(columns, row))
            scores.append(row_dict)
        conn.close()
        return scores


    def get_best_scores(self, num_of_scores):
        scores = []
        query = '''
                SELECT * FROM telemed_users ORDER BY Score;
                '''

        conn = self.connection()
        cursor = conn.cursor()
        cursor.execute(query)
        columns = [desc[0] for desc in cursor.description]

        for row in cursor.fetchall():
            row_dict = dict(zip(columns, row))
            scores.append(row_dict)
        conn.close()
        return scores[:num_of_scores]

    def submit_score(self, user_name, score):
        conn = self.connection()
        cursor = conn.cursor()
        cursor.execute(("INSERT INTO dbo.telemed_users(UserName, Score) VALUES(?, ?);"), (user_name, score))
        conn.commit()
        conn.close()

