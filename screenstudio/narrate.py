from gtts import gTTS

script = """
Welcome to a free interactive app for mastering Russian verbs of motion. Let me show you how to use it.

First, set your checkboxes to focus on specific tenses, aspects, or prefixes. A good place to start would be "Present (Imperfective)", with "no prefix" for the basic forms.

When you’re ready, click one of the four mode buttons to start the quiz.

Now you will receive ten challenge sentences. For each challenge, you only need to ask yourself one question: Do I know the correct verb for this sentence? The other words in the sentence are helpful for getting a feel for usage, and possibly helping to build your vocabulary, but they are incidental to learning verbs of motion. You don't need to know their meaning when you first start to learn the verbs of motion.

If yes—great. Hold that verb in your mind, then click Reveal Choices to find the correct sentence. You can just ignore the other words in the sentence. All that matters is practicing the verbs of motion.

But if not—click Reveal Choices and now you can use your detective skills to figure out the correct choice from the context.

The important point is that, if you always reveal choices before thinking about the answer, the quiz will feel too easy—and you won’t learn much.

As you can see from all the available options, this tool adapts to your level. With just a few checkbox tweaks, you can gradually shift from simple to seriously challenging.

There’s no login, no ads, and nothing to install.

Just a clean, flexible way to build real fluency through focused practice.

Give it a try—and let your intuition grow sharper with every round.
"""

tts = gTTS(text=script, lang='en')
tts.save("narration.mp3")
