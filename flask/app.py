from flask import Flask, render_template
from api.database_operations import DBOperations

app = Flask(__name__)
db = DBOperations()


@app.route('/best_scores.html')
def best_scores():
    best_scores_data = db.get_best_scores(5)
    return render_template('best_scores.html', data=best_scores_data)


@app.route('/best_score.html')
def best_score():
    best_score_data = db.get_best_scores(1)
    return render_template('best_score.html', data=best_score_data)
