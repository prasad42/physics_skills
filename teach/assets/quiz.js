/* quiz.js — shared interactive widgets for all spine lessons.
 *
 * Quiz markup convention (styled by course.css):
 *
 *   <div class="quiz" data-fb-correct="Why it's right…" data-fb-wrong="Why not…">
 *     <p class="quiz-q">Question text?</p>
 *     <div class="quiz-opts">
 *       <button class="quiz-opt" data-correct>right answer</button>
 *       <button class="quiz-opt">wrong answer A</button>
 *       <button class="quiz-opt">wrong answer B</button>
 *     </div>
 *     <p class="quiz-fb"></p>
 *     <button class="quiz-reset">try again</button>
 *   </div>
 *
 * Options are shuffled on load so position carries no signal.
 * Authors: keep all option texts the same word count (ideally char count).
 *
 * Reveal markup convention (free-recall practice):
 *
 *   <div class="reveal">
 *     <button class="reveal-btn">Reveal answer</button>
 *     <div class="reveal-body">…</div>
 *   </div>
 */
(function () {
  "use strict";

  function shuffleChildren(container) {
    const kids = Array.from(container.children);
    for (let i = kids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      container.appendChild(kids[j]);
      kids.splice(j, 1);
    }
    // note: appendChild-based shuffle above is order-biased-free enough for 3–4 options
  }

  function initQuiz(quiz) {
    const opts = quiz.querySelectorAll("button.quiz-opt");
    const optsBox = quiz.querySelector(".quiz-opts");
    const fb = quiz.querySelector(".quiz-fb");
    const reset = quiz.querySelector(".quiz-reset");
    if (optsBox) shuffleChildren(optsBox);

    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const correct = btn.hasAttribute("data-correct");
        btn.classList.add(correct ? "correct" : "wrong");
        if (!correct) {
          const right = quiz.querySelector("button.quiz-opt[data-correct]");
          if (right) right.classList.add("correct");
        }
        opts.forEach(function (b) { b.disabled = true; });
        if (fb) {
          fb.textContent = correct
            ? "✓ " + (quiz.dataset.fbCorrect || "Correct.")
            : "✗ " + (quiz.dataset.fbWrong || quiz.dataset.fbCorrect || "Not quite.");
          fb.classList.add("show");
        }
        if (reset) reset.classList.add("show");
      });
    });

    if (reset) {
      reset.addEventListener("click", function () {
        opts.forEach(function (b) {
          b.disabled = false;
          b.classList.remove("correct", "wrong");
        });
        if (fb) { fb.classList.remove("show"); fb.textContent = ""; }
        reset.classList.remove("show");
        if (optsBox) shuffleChildren(optsBox);
      });
    }
  }

  function initReveal(box) {
    const btn = box.querySelector("button.reveal-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      box.classList.toggle("open");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(initQuiz);
    document.querySelectorAll(".reveal").forEach(initReveal);
  });
})();
