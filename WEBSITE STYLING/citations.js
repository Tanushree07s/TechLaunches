document.addEventListener("DOMContentLoaded", function () {
  const refs = {
    // NEURAL NETWORKS
    "ref1": '<a href="https://www.ibm.com/think/topics/neural-networks" target="_blank" rel="noopener noreferrer">"What is a Neural Network?"</a>. IBM. Retrieved August 20, 2025.',
    "ref2": '<a href="https://codewave.com/insights/how-to-develop-a-neural-network-steps/" target="_blank" rel="noopener noreferrer">"Steps to Create and Develop Your Own Neural Network"</a>. Codewave. Retrieved August 20, 2025.',
    "ref3": '<a href="https://www.ibm.com/think/topics/backpropagation" target="_blank" rel="noopener noreferrer">"What is backpropagation?"</a>. IBM. Retrieved August 20, 2025.',
    "ref4": '<a href="https://www.newhorizons.com/resources/blog/why-is-python-used-for-machine-learning" target="_blank" rel="noopener noreferrer">"6 Reasons Why Python Is Used for Machine Learning"</a>. New Horizons. Retrieved August 20, 2025.',
    "ref5": '<a href="https://madewithml.com/courses/foundations/numpy/" target="_blank" rel="noopener noreferrer">"NumPy for Machine Learning"</a>. madewithml. Retrieved August 20, 2025.',
    "ref6": '<a href="https://www.geeksforgeeks.org/deep-learning/deep-learning-with-pytorch-an-introduction/" target="_blank" rel="noopener noreferrer">"Deep Learning with PyTorch | An Introduction"</a>. GeeksforGeeks. Retrieved August 20, 2025.',
    "ref7": '<a href="https://www.geeksforgeeks.org/python/introduction-to-tensorflow/" target="_blank" rel="noopener noreferrer">"Introduction to TensorFlow"</a>. Geeksforgeeks. Retrieved August 20, 2025.',
    "ref8": '<a href="https://www.geeksforgeeks.org/machine-learning/backpropagation-in-neural-network/" target="_blank" rel="noopener noreferrer">"Backpropagation in Neural Network"</a>. GeeksforGeeks. Retrieved August 20, 2025.',
    "ref9": '<a href="https://www.w3schools.com/python/numpy/numpy_intro.asp" target="_blank" rel="noopener noreferrer">"NumPy Introduction"</a>. W3schools. Retrieved August 21, 2025.',
    "ref10": '<a href="https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)" target="_blank" rel="noopener noreferrer">"Transformer (deep learning architecture)"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref11": '<a href="https://www.databricks.com/glossary/tensorflow-guide#:~:text=In%20November%20of%202015%2C%20Google,GPUs%2C%20and%20clusters%20of%20GPUs." target="_blank" rel="noopener noreferrer">"TensorFlow"</a>. Databricks. Retrieved August 21, 2025.',
    "ref12": '<a href="https://en.wikipedia.org/wiki/PyTorch" target="_blank" rel="noopener noreferrer">"PyTorch"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref13": '<a href="https://www.ibm.com/think/topics/pytorch" target="_blank" rel="noopener noreferrer">"What is PyTorch?"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref14": '<a href="https://en.wikipedia.org/wiki/Open_Neural_Network_Exchange#:~:text=ONNX%20was%20originally%20named%20Toffee,announced%20support%20for%20the%20initiative." target="_blank" rel="noopener noreferrer">"Open Neural Network Exchange"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref15": '<a href="https://milvus.io/ai-quick-reference/what-is-onnx-and-why-is-it-used" target="_blank" rel="noopener noreferrer">"What is ONNX, and why is it used?"</a>. Milvus. Retrieved August 21, 2025.',
    "ref16": '<a href="https://ai.meta.com/tools/onnx/#:~:text=Framework%20interoperability&text=ONNX%20models%20are%20currently%20supported,Nvidia\'s%20TensorRT%20and%20Intel\'s%20nGraph." target="_blank" rel="noopener noreferrer">"ONNX"</a>. Meta. Retrieved August 21, 2025.',
    "ref17": '<a href="https://medium.com/@danushidk507/onnx-open-neural-network-exchange-29f39a84c5f2" target="_blank" rel="noopener noreferrer">"ONNX — Open Neural Network Exchange"</a>. Medium. Retrieved August 21, 2025.',
    "ref18": '<a href="https://www.ibm.com/think/topics/large-language-models" target="_blank" rel="noopener noreferrer">"What are large language models (LLMs)?"</a>. IBM. Retrieved August 21, 2025.',
    "ref19": '<a href="https://medium.com/@minh.hoque/a-comprehensive-overview-of-transformer-based-models-encoders-decoders-and-more-e9bc0644a4e5" target="_blank" rel="noopener noreferrer">"A Comprehensive Overview of Transformer-Based Models: Encoders, Decoders, and More"</a>. Medium. Retrieved August 21, 2025.',
    "ref20": '<a href="https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html" target="_blank" rel="noopener noreferrer">"Understanding and Coding the Self-Attention Mechanism of Large Language Models From Scratch"</a>. Sebastian Raschka. Retrieved August 21, 2025.',
    "ref21": '<a href="https://www.datacamp.com/tutorial/how-transformers-work" target="_blank" rel="noopener noreferrer">"How Transformers Work: A Detailed Exploration of Transformer Architecture"</a>. DataCamp. Retrieved August 21, 2025.',
    "ref22": '<a href="https://www.tensorflow.org/guide/intro_to_modules" target="_blank" rel="noopener noreferrer">"TensorFlow Core"</a>. TensorFlow. Retrieved August 21, 2025.',
    "ref23": '<a href="https://medium.com/@sahin.samia/mastering-the-basics-of-torch-nn-a-comprehensive-guide-to-pytorchs-neural-network-module-9f2d704e8c7f" target="_blank" rel="noopener noreferrer">"Mastering the Basics of torch.nn: A Comprehensive Guide to PyTorch’s Neural Network Module"</a>. Medium. Retrieved August 21, 2025.',
    "ref24": '<a href="https://github.com/Skumarr53/Attention-is-All-you-Need-PyTorch/blob/master/transformer/model.py" target="_blank" rel="noopener noreferrer">"Attention-is-All-you-Need-PyTorch"</a>. GitHub. Retrieved August 21, 2025.',
    "ref25": '<a href="https://www.datacamp.com/tutorial/building-a-transformer-with-py-torch" target="_blank" rel="noopener noreferrer">"Transformer Model Tutorial in PyTorch: From Theory to Code"</a>. DataCamp. Retrieved August 21, 2025.',
    "ref26": '<a href="https://docs.pytorch.org/docs/stable/index.html" target="_blank" rel="noopener noreferrer">"PyTorch documentation"</a>. PyTorch. Retrieved August 21, 2025.',
    "ref27": '<a href="https://docs.pytorch.org/docs/stable/generated/torch.nn.Module.html" target="_blank" rel="noopener noreferrer">"Module"</a>. PyTorch. Retrieved August 21, 2025.',
    "ref28": '<a href="https://www.geeksforgeeks.org/deep-learning/understanding-broadcasting-in-pytorch/" target="_blank" rel="noopener noreferrer">"Understanding Broadcasting in PyTorch"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref29": '<a href="https://www.geeksforgeeks.org/deep-learning/training-neural-networks-with-dropout-for-effective-regularization/" target="_blank" rel="noopener noreferrer">"Training Neural Networks with Dropout for Effective Regularization"</a>. GeeksForGeeks. Retrieved August 21, 2025.',  
    "ref30": '<a href="https://en.wikipedia.org/wiki/Generative_pre-trained_transformer" target="_blank" rel="noopener noreferrer">"Generative pre-trained transformer"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref31": '<a href="https://aws.amazon.com/what-is/reinforcement-learning-from-human-feedback/" target="_blank" rel="noopener noreferrer">"What is RLHF"</a>. aws. Retrieved August 21, 2025.',
    "ref32": '<a href="https://news.microsoft.com/source/2019/07/22/openai-forms-exclusive-computing-partnership-with-microsoft-to-build-new-azure-ai-supercomputing-technologies/" target="_blank" rel="noopener noreferrer">"OpenAI forms exclusive computing partnership with Microsoft to build new Azure AI supercomputing technologies"</a>. Microsoft. Retrieved August 21, 2025.',
    "ref33": '<a href="https://en.wikipedia.org/wiki/BERT_(language_model)" target="_blank" rel="noopener noreferrer">"BERT (language model)"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref34": '<a href="https://en.wikipedia.org/wiki/PaLM" target="_blank" rel="noopener noreferrer">"PaLM"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref35": '<a href="https://en.wikipedia.org/wiki/Gemini_(chatbot)" target="_blank" rel="noopener noreferrer">"Gemini (chatbot)"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref36": '<a href="https://en.wikipedia.org/wiki/Llama_(language_model)" target="_blank" rel="noopener noreferrer">"LLaMA (chatbot)"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref37": '<a href="https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/" target="_blank" rel="noopener noreferrer">"Democratizing access to large-scale language models with OPT-175B "</a>. Meta. Retrieved August 21, 2025.',
    "ref38": '<a href="https://en.wikipedia.org/wiki/Claude_(language_model)" target="_blank" rel="noopener noreferrer">"Claude (language model)"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref39": '<a href="https://www.ibm.com/think/topics/natural-language-processing" target="_blank" rel="noopener noreferrer">"What is NLP (natural language processing)? "</a>. IBM. Retrieved August 21, 2025.',
    "ref40": '<a href="https://www.debutinfotech.com/blog/nlp-tokenization-methods-types-tools" target="_blank" rel="noopener noreferrer">"NLP Tokenization Guide: Methods, Types, Tools & Use Cases Explained"</a>. Debut InfoTech. Retrieved August 21, 2025.',
    "ref41": '<a href="https://www.geeksforgeeks.org/nlp/nlp-part-of-speech-default-tagging/" target="_blank" rel="noopener noreferrer">"POS(Parts-Of-Speech) Tagging in NLP"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref42": '<a href="https://www.geeksforgeeks.org/nlp/bidirectional-lstm-in-nlp/" target="_blank" rel="noopener noreferrer">"Bidirectional LSTM in NLP"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref43": '<a href="https://www.geeksforgeeks.org/nlp/conditional-random-fields-crfs-for-pos-tagging-in-nlp/" target="_blank" rel="noopener noreferrer">"Conditional Random Fields (CRFs) for POS tagging in NLP"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref44": '<a href="https://www.geeksforgeeks.org/nlp/named-entity-recognition/" target="_blank" rel="noopener noreferrer">"Named Entity Recognition"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref45": '<a href="https://www.kaggle.com/code/qmarva/bert-explained-and-fine-tuned-for-ner" target="_blank" rel="noopener noreferrer">"Bert Explained and Fine-Tuned for NER"</a>. Kaggle. Retrieved August 21, 2025.',
    "ref46": '<a href="https://www.geeksforgeeks.org/compiler-design/constituency-parsing-and-dependency-parsing/" target="_blank" rel="noopener noreferrer">"Constituency Parsing and Dependency Parsing"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref47": '<a href="https://www.geeksforgeeks.org/machine-learning/what-is-sentiment-analysis/" target="_blank" rel="noopener noreferrer">"What is Sentiment Analysis?"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref48": '<a href="https://www.geeksforgeeks.org/nlp/machine-translation-of-languages-in-artificial-intelligence/" target="_blank" rel="noopener noreferrer">"Machine Translation in AI"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref49": '<a href="https://www.geeksforgeeks.org/nlp/what-is-text-generation/" target="_blank" rel="noopener noreferrer">"What is Text Generation?"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref50": '<a href="https://www.geeksforgeeks.org/nlp/rag-vs-traditional-qa/" target="_blank" rel="noopener noreferrer">"RAG vs Traditional QA"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref51": '<a href="https://www.geeksforgeeks.org/nlp/building-a-rule-based-chatbot-with-natural-language-processing/" target="_blank" rel="noopener noreferrer">"Building a Rule-Based Chatbot with Natural Language Processing"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref52": '<a href="https://yourgpt.ai/blog/general/retrieval-vs-generative-chatbots-best-choice-for-your-business-in-2024" target="_blank" rel="noopener noreferrer">"Retrieval vs. Generative Chatbots: Best Choice for Your Business in 2024"</a>. YourGPT AI. Retrieved August 21, 2025.',
    "ref53": '<a href="https://www.geeksforgeeks.org/machine-learning/understanding-tf-idf-term-frequency-inverse-document-frequency/" target="_blank" rel="noopener noreferrer">"Understanding TF-IDF (Term Frequency-Inverse Document Frequency)"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref54": '<a href="https://www.geeksforgeeks.org/dbms/cosine-similarity/" target="_blank" rel="noopener noreferrer">"Cosine Similarity"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref55": '<a href="https://www.ibm.com/think/topics/chatbots#:~:text=Generative%20AI%2Dpowered%20chatbots&text=FAQ%20chatbots%20no%20longer%20need,the%20wider%20range%20of%20questions." target="_blank" rel="noopener noreferrer">"What is a chatbot?"</a>. IBM. Retrieved August 21, 2025.',
    "ref56": '<a href="https://www.engati.ai/glossary/hybrid-chatbot-examples" target="_blank" rel="noopener noreferrer">"What is a Hybrid Chatbot?"</a>. Engati. Retrieved August 21, 2025.',
    "ref57": '<a href="https://github.com/jadessechan/Retrieval-Chatbot/blob/master/main.py" target="_blank" rel="noopener noreferrer">"Retrival-Chatbot"</a>. GitHub. Retrieved August 21, 2025.',
    "ref58": '<a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">"scikit-learn"</a>. Scikit-Learn. Retrieved August 21, 2025.',
    "ref59": '<a href="https://en.wikipedia.org/wiki/ChatGPT" target="_blank" rel="noopener noreferrer">"ChatGPT"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref60": '<a href="https://www.geeksforgeeks.org/machine-learning/text-to-text-transfer-transformer-in-data-augmentation/" target="_blank" rel="noopener noreferrer">"Text to text Transfer Transformer (T5) in Data Augmentation"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref61": '<a href="https://www.datacamp.com/tutorial/flan-t5-tutorial" target="_blank" rel="noopener noreferrer">"FLAN-T5 Tutorial: Guide and Fine-Tuning"</a>. DataCamp. Retrieved August 21, 2025.',
    "ref62": '<a href="https://medium.com/@aman.anand54321/cross-lingual-models-xlm-r-7d557302698b" target="_blank" rel="noopener noreferrer">"Cross Lingual Models( XLM-R )"</a>. Medium. Retrieved August 21, 2025.',
    "ref63": '<a href="https://ai.meta.com/tools/fairseq/" target="_blank" rel="noopener noreferrer">"Fairseq"</a>. Meta. Retrieved August 21, 2025.',
    "ref64": '<a href="https://engineering.fb.com/2019/01/22/ai-research/laser-multilingual-sentence-embeddings/" target="_blank" rel="noopener noreferrer">"LASER"</a>. Meta. Retrieved August 21, 2025.',
    "ref65": '<a href="https://ai.meta.com/blog/introducing-many-to-many-multilingual-machine-translation/" target="_blank" rel="noopener noreferrer">"The first AI model that translates 100 languages without relying on English data"</a>. Meta. Retrieved August 21, 2025.',
    "ref66": '<a href="https://en.wikipedia.org/wiki/Microsoft_Copilot" target="_blank" rel="noopener noreferrer">"Microsoft Copilot"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref67": '<a href="https://www.proserveit.com/blog/introduction-to-microsoft-new-azure-openai-service#:~:text=%F0%9F%8F%81%20Conclusion-,What%20is%20Azure%20OpenAI%20Service%3F,Microsoft%20Azure%20applications%20and%20platform." target="_blank" rel="noopener noreferrer">"Introduction to Microsoft\'s Azure OpenAI Service"</a>. Proserveit. Retrieved August 21, 2025.',
    "ref68": '<a href="https://github.com/deepspeedai/DeepSpeed" target="_blank" rel="noopener noreferrer">"DeepSpeed"</a>. GitHub. Retrieved August 21, 2025.',
    "ref69": '<a href="https://onnxruntime.ai/docs/" target="_blank" rel="noopener noreferrer">"Welcome to ONNX Runtime"</a>. ONNX Runtime. Retrieved August 21, 2025.',
    "ref70": '<a href="https://www.ledger.com/academy/how-does-a-blockchain-transaction-work" target="_blank" rel="noopener noreferrer">"How Does a Blockchain Transaction Work?"</a>. Ledger Academy. Retrieved August 21, 2025.',
    "ref71": '<a href="https://www.ibm.com/think/topics/smart-contracts" target="_blank" rel="noopener noreferrer">"What are smart contracts on blockchain?"</a>. IBM. Retrieved August 21, 2025.',
    "ref72": '<a href="https://www.linkedin.com/pulse/why-programmability-critical-future-blockchain-margaretta-colangelo#:~:text=For%20non%2Dprogrammable%20blockchain%2C%20there,completely%20up%20to%20the%20user." target="_blank" rel="noopener noreferrer">"Why Programmability is Critical for Blockchain"</a>. LinkedIn. Retrieved August 21, 2025.',
    "ref73": '<a href="https://www.linkedin.com/pulse/exploring-transaction-models-blockchain-nikhil-varma-phd-gqgue/" target="_blank" rel="noopener noreferrer">"Exploring Transaction Models in Blockchain"</a>. LinkedIn. Retrieved August 21, 2025.',
    "ref74": '<a href="https://www.geeksforgeeks.org/techtips/difference-between-proof-of-work-pow-and-proof-of-stake-pos-in-blockchain/" target="_blank" rel="noopener noreferrer">"Difference between Proof of Work (PoW) and Proof of Stake (PoS) in blockchain"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref75": '<a href="https://www.coinbase.com/en-in/learn/crypto-basics/proof-of-work-pow-vs-proof-of-stake-pos-what-is-the-difference" target="_blank" rel="noopener noreferrer">"Proof of Work (PoW) vs. Proof of Stake (PoS): what\'s the difference?"</a>. Coinbase. Retrieved August 21, 2025.',
    "ref76": '<a href="https://www.geeksforgeeks.org/computer-networks/blockchain-forks/" target="_blank" rel="noopener noreferrer">"Blockchain Forks"</a>. GeeksForGeeks. Retrieved August 21, 2025.',
    "ref77": '<a href="https://www.cyfrin.io/blog/understanding-double-spending-in-blockchain#:~:text=Double%20spending%20race%20Attacks%E2%80%8D,-Occur%20when%20an&text=Inconsistencies%20in%20transaction%20confirmation%20may,same%20tokens%20are%20being%20spent)." target="_blank" rel="noopener noreferrer">"Understanding Blockchain Double Spending Attacks - With examples"</a>. Cyfrin. Retrieved August 21, 2025.',
    "ref78": '<a href="https://chain.link/education-hub/cross-chain-vs-multi-chain" target="_blank" rel="noopener noreferrer">"Cross-Chain vs. Multi-Chain"</a>. Chainlink. Retrieved August 21, 2025.',
    "ref79": '<a href="https://blockchain-academy.hs-mittweida.de/courses/blockchain-introduction-technical-beginner-to-intermediate/lessons/lesson-14-bitcoin-mining-difficulty/topic/in-depth-explanation-of-bitcoin-mining-difficulty/" target="_blank" rel="noopener noreferrer">"In-depth explanation of Bitcoin Mining Difficulty"</a>. BCAM. Retrieved August 21, 2025.',
    "ref80": '<a href="https://guiprojects.com/cpp-blockchain-implementation/" target="_blank" rel="noopener noreferrer">"C++ blockchain Implementation"</a>. GUIProjects. Retrieved August 21, 2025.',
    "ref81": '<a href="https://stackoverflow.com/questions/2262386/generate-sha256-with-openssl-and-c" target="_blank" rel="noopener noreferrer">"Generate sha256 with OpenSSL and C++"</a>. Stack Overflow. Retrieved August 21, 2025.',
    "ref82": '<a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank" rel="noopener noreferrer">"Bitcoin"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref83": '<a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank" rel="noopener noreferrer">"Ethereum"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref84": '<a href="https://en.wikipedia.org/wiki/Binance" target="_blank" rel="noopener noreferrer">"Binance"</a>. Wikipedia. Retrieved August 21, 2025.',
    "ref85": '<a href="https://en.wikipedia.org/wiki/Solana_(blockchain_platform)" target="_blank" rel="noopener noreferrer">"Solana (blockchain platform)"</a>. Wikipedia. Retrieved August 21, 2025.'

  
  
  };

  const referenceList = document.getElementById("references");
  const citationCounts = {};
  let refNumber = 1; // fresh numbering for each page

  // Process each inline reference
  document.querySelectorAll("[data-ref]").forEach((el) => {
    const refId = el.getAttribute("data-ref");

    // If this reference hasn’t been cited before, add it to the list
    if (!citationCounts[refId]) {
      const li = document.createElement("li");
      li.id = "footnote-" + refId;

      // Add external link icon (↗) after every <a>
      const withIcon = refs[refId].replace(
        /<\/a>/,
        ' <span class="external-icon">↗</span></a>'
      );

      li.innerHTML = withIcon + ' <span class="backlinks"></span>';
      referenceList.appendChild(li);

      citationCounts[refId] = { count: 0, number: refNumber++ };
    }

    // Increment citation count
    citationCounts[refId].count++;
    const count = citationCounts[refId].count;
    const num = citationCounts[refId].number;

    // Assign label letters for backlinks (a, b, c…)
    const label = String.fromCharCode(96 + count); // 97='a'
    const sup = document.createElement("sup");
    sup.innerHTML = `<a href="#footnote-${refId}" id="cite-${refId}-${count}">[${num}]</a>`;
    el.appendChild(sup);

    // Add backlink in the footnote
    const backlinks = document.querySelector(`#footnote-${refId} .backlinks`);
    const backLink = document.createElement("a");
    backLink.href = `#cite-${refId}-${count}`;
    backLink.textContent = `↩${label}`;
    backlinks.appendChild(backLink);
  });

  /* =========================
     Smooth scroll with offset
     ========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // stop browser’s default jump

    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      // get navbar height safely, default to 60 if not found
      const navbarHeight =
        (document.querySelector(".navbar")?.getBoundingClientRect().height || 60) + 8;

      // calculate scroll position with offset
      const offsetTop =
        targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;

      // smooth scroll
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // update hash in URL without triggering the default jump
      history.pushState(null, "", "#" + targetId);
    }
  });
});

























});