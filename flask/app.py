from flask import Flask, jsonify
from api.database_operations import DBOperations

app = Flask(__name__)
db = DBOperations()


@app.route('/best_results')
def best_scores():
    best_scores_data = db.get_best_scores(5)
    if len(best_scores_data) == 0:
        return "No records available."
    else:
        for score in best_scores_data:
            score['Score'] = str(score['Score'])
        return jsonify(best_scores_data)


if __name__ == '__main__':
    app.run(debug=True)
