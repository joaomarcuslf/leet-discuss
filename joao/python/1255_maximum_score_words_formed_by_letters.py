class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        from collections import Counter

        letter_count = Counter(letters)
        
        def calculate_word_score(word):
            return sum(score[ord(char) - ord('a')] for char in word)
        
        word_scores = [calculate_word_score(word) for word in words]
        
        def backtrack(index, current_score, available_letters):
            if index == len(words):
                return current_score
            
            max_score = current_score
            word = words[index]
            
            word_count = Counter(word)
            can_form_word = all(word_count[char] <= available_letters[char] for char in word_count)
            
            if can_form_word:
                for char in word_count:
                    available_letters[char] -= word_count[char]
                max_score = max(max_score, backtrack(index + 1, current_score + word_scores[index], available_letters))
                for char in word_count:
                    available_letters[char] += word_count[char]
            
            max_score = max(max_score, backtrack(index + 1, current_score, available_letters))
            
            return max_score

        return backtrack(0, 0, letter_count)
        
