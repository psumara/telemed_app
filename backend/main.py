import time, random

class Game:
    def __init__(self):
        pass
    
    def start_test(self, wait_before):
        print("Preparing test\n")
        if (type(wait_before) != int):
            print("Argument is not integer. Aborting")
            return
        time.sleep(wait_before) #sleeps before start test
        print("***START!***\n")
        time.sleep(random.randint(2, 5))
        start = time.clock() #catch time moment
        #emit signal to change color in js
        a = input() #to replace with achieving signal from web page
        stop = time.clock()
        time_spent = stop-start
        
        print("Reaction time: " + str(time_spent))
        
    
    
    def __del__(self):
        pass
    

if __name__=="_main__":
    game=Game() 
    game.start_test(2)