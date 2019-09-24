import matplotlib.pyplot as plt
import pickle
import numpy as np

# expect history to be comma separated values of dosages of
# the last (at least 3) times the user has vaped in '21,HIGH,20,HIGH,19,LOW' format
def predict_gaussian(history):
  def kernel(a, b):
    """ GP squared exponential kernel """
    kernelParameter = 0.6
    sqdist = np.sum(a**2,1).reshape(-1,1) + np.sum(b**2,1) - 2*np.dot(a, b.T)
    return np.exp(-.5 * (1/kernelParameter) * sqdist)

  nicotine_levels = []
  feedback = []
  past = history.split(",")
  for i in range(0, len(past), 2):
    nicotine_levels.append(float(past[i]))
    feedback.append(past[i+1])
  N = len(parsed_history)         # number of training points.
  n = 2         # number of test points.
  s = 0.00005    # noise variance.

  # X = np.random.uniform(0, 20, size=(N,1))
  # X = np.array(list(range(0, N))).reshape(N,1)
  X = []
  y = []
  for i in range(0, N):
    X.append(i)
    X.append(i)
  X = np.array(X).reshape(N*2,1)
  for i, fb in enumerate(feedback):
    y.append(nicotine_levels[i])
    if fb == 'HIGH':
      y.append(nicotine_levels[i]*0.9)
    else:
      y.append(min(nicotine_levels[i]*1.1, 20.0))
  y = np.array(y)

  K = kernel(X, X)
  L = np.linalg.cholesky(K + s*np.eye(N*2))

  # points we're going to make predictions at.
  Xtest = np.linspace(N, N+1, n).reshape(-1,1)

  # compute the mean at our test points.
  Lk = np.linalg.solve(L, kernel(X, Xtest))
  mu = np.dot(Lk.T, np.linalg.solve(L, y))
  
  return ("gaussian", mu[0])

# expects history in format of: <previous_2_actual>,<previous_1_actual>,<HIGH|LOW>
# HIGH indicates previous dosage was too high (user feedback)
# LOW  indicates previous dosage was too low  (user feedback)
def predict_moving_average(history):
  data = history.split(",")
  y0 = 21.0
  given_0 = data[0]
  given_1 = data[1]
  wanted_str = data[2]
  wanted = 21.0
  if wanted_str=="HIGH":
    wanted = 0.9*given_1
  else:
    wanted = min(1.1*given_1, given_0)
  prop = (1-gamma)/2
  y2 = prop*given_0 + prop*given_1 + 0.3*min(wanted,given_0,given_1,model(i))
  return ("average", y2)
