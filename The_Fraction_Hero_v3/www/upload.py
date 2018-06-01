import os
import mysql.connector

cnx = mysql.connector.connect(user='client', password='password',
                              host='192.168.1.116',                   # edit based on where your fractionhero database is installed
                              database='fractionhero')
cursor = cnx.cursor()

for filename in os.listdir('logs'):
	with open('logs/' + filename) as file:

		first_line = file.readline().split()
		session_id = first_line[0]
		student_id = first_line[1]

		print first_line

		in_quiz = False

		for line in file:
			print line
			line = line.split()

			if line[1] == 'quiz' and line[3] == 'started':

				if in_quiz == True:
					timestamp = line[0]
					battle_time = None
					finished = 'no'

					add_battle = ('INSERT IGNORE INTO battles '
               '(timestamp, student_id, session_id, battle_num, time, finished) '
               'VALUES (%s, %s, %s, %s, %s, %s)')
					battle_row = (timestamp, student_id, session_id, battle_num, battle_time, finished)
					cursor.execute(add_battle, battle_row)

				battle_num = line[3]
				action_num = 0
				in_quiz = True

			if line[1] == 'quiz' and line[3] == 'ended':
				print "HAHAHA"
				timestamp = line[0]
				battle_time = line[4]
				finished = 'yes'

				add_battle = ('INSERT IGNORE INTO battles '
	               '(timestamp, student_id, session_id, battle_num, time, finished) '
	               'VALUES (%s, %s, %s, %s, %s, %s)')
				battle_row = (timestamp, student_id, session_id, battle_num, battle_time, finished)
				cursor.execute(add_battle, battle_row)

				in_quiz = False

			if line[1] == 'problem':
				timestamp = line[0]
				action_num += 1
				if line[2] == 'Easy':
					difficulty = 1

				elif line[2] == 'Medium':
					difficulty = 2
				
				elif line[2] == 'Hard':
					difficulty = 3

				else:
					difficulty = 4

				if line[3] == 'Addition':
					topic = 1

				elif line[3] == 'Subtraction':
					topic = 2
				
				elif line[3] == 'Multiplication':
					topic = 3

				elif line[3] == 'Division':
					topic = 4

				else:
					topic = 5

				action_time = line[4]

				if line[5] == '1':
					result = 'correct'
				
				elif line[5] == '-1':
					result = 'wrong'
				
				else:
					result = 'skipped'
				
				add_action = ('INSERT IGNORE INTO actions '
	               '(timestamp, student_id, session_id, battle_num, action_num, topic, difficulty, time, result) '
	               'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)')
				action_row = (timestamp, student_id, session_id, battle_num, action_num, topic, difficulty, action_time, result)
				cursor.execute(add_action, action_row)
			
			if line[1] == 'visited':
				timestamp = line[0]
				location = line[2]

				print "HELLO"

				add_visit = ('INSERT IGNORE INTO visits '
	               '(timestamp, student_id, session_id, location) '
	               'VALUES (%s, %s, %s, %s)')
				visit_row = (timestamp, student_id, session_id, location)
				cursor.execute(add_visit, visit_row)

cnx.commit()

cursor.close()
cnx.close()