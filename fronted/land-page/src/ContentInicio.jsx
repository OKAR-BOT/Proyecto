

function ContentInicio() {
  return (
    <div className='contentInicio flex flex-col items-center justify-center text-center mt-20'>
      <h1 className='text-6xl font-bold mb-5'>Bienvenido a IA Solutions</h1>
      <p className='text-xl px-20 mb-5'>Descubre cómo la inteligencia artificial puede transformar tu negocio y llevarlo al siguiente nivel con nuestras soluciones innovadoras y personalizadas.</p>
      <section className="flex flex-col mb-5 items-center justify-center gap-10 px-20 bg-[#0E48DF] text-white p-10 rounded-lg md:flex-row md:bg-gray-200 md:text-black md:p-10 md:px-20">
        <p>La Inteligencia Artificial o IA es el es una rama de la informática que se centra en el desarrollo de sistemas informáticos capaces de realizar tareas que habitualmente requieren de inteligencia humana, como la percepción visual, el reconocimiento de voz, la toma de decisiones y la traducción de idiomas. El aprendizaje automático (machine learning), un subconjunto de la IA, es el estudio de algoritmos capaces de mejorar automáticamente a través de la experiencia.

        La inteligencia artificial (IA) es un conjunto de tecnologías que permiten que las computadoras realicen una variedad de funciones avanzadas, incluida la capacidad de ver, comprender y traducir lenguaje hablado y escrito, analizar datos, hacer recomendaciones y mucho más. 
        La IA es la columna vertebral de la innovación en la computación moderna, lo que genera valor para las personas y las empresas. Por ejemplo, el reconocimiento óptico de caracteres (OCR) usa la IA para extraer texto y datos de imágenes y documentos, y convierte el contenido no estructurado en datos estructurados listos para las empresas, además de brindar estadísticas valiosas.</p>
        <img src="/Images/inicioIA.png" className="w-1/2 rounded-xl" ></img>
      </section>
      <section className="flex flex-col mt-10 items-center justify-center gap-10 px-20 bg-[#0E48DF] text-white p-10 rounded-lg md:flex-col md:bg-gray-200 md:text-black md:p-10 md:px-20" >
        <h1 className="text-4xl font-bold">Definicion de la Inteligencia Artificial</h1>
        <p>
        La inteligencia artificial es un campo de la ciencia relacionado con la creación de computadoras y máquinas que pueden razonar, aprender y actuar de una manera que normalmente requeriría inteligencia humana o que involucra datos cuya escala excede lo que los humanos pueden analizar. 
        La IA es un campo amplio que incluye muchas disciplinas, como la informática, el análisis y la estadística de datos, la ingeniería de hardware y software, la lingüística, la neurociencia y hasta la filosofía y la psicología. 
        A nivel operativo para el uso empresarial, la IA es un conjunto de tecnologías que se basan principalmente en el aprendizaje automático y el aprendizaje profundo, que se usan para el análisis de datos, la generación de predicciones y previsiones, la categorización de objetos, el procesamiento de lenguaje natural, las recomendaciones, la recuperación inteligente de datos y mucho más.
        </p>
      </section>
    </div>
  );
} export default ContentInicio;