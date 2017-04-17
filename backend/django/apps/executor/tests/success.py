import unittest
import time
import random

MIN_RAND = 0
MAX_RAND = 15


class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')
        rnd = random.randint(MIN_RAND, MAX_RAND)
        time.sleep(rnd)
        print("test_upper()")

    def test_isupper(self):
        rnd = random.randint(MIN_RAND, MAX_RAND)
        time.sleep(rnd)
        self.assertTrue('FOO'.isupper())
        print("test_isupper()")

    def test_split(self):
        rnd = random.randint(MIN_RAND, MAX_RAND)
        time.sleep(rnd)
        s = 'hello world'
        print("test_split()")
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)

if __name__ == '__main__':
    unittest.main()
