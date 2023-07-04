/** @format */

export const mathGrade10 = ["Algebra", "Functions", "Geometry", "Trigonometry", "Measurement", "Statistics and Probability", "Financial Mathematics", "Analytical Geometry"];

export const mathGrade11 = ["Algebra", "Functions and Graphs", "Sequences and Series", "Trigonometry", "Euclidean Geometry", "Analytical Geometry", "Statistics", "Probability", "Financial Mathematics", "Exponential and Logarithmic Functions", "Differential Calculus", "Probability Distributions"];

export const mathGrade12 = ["Algebraic Functions", "Calculus", "Analytical Geometry", "Statistics", "Probability", "Euclidean Geometry", "Finance and Growth", "Sequences and Series", "Trigonometry"];

export const physSciGrade10 = [
  "Matter and Materials",
  "Atoms, Elements, and Compounds",
  "Chemical Reactions",
  "Quantitative Aspects of Chemical Change",
  "Structure of the Atom",
  "Periodic Table and Chemical Families",
  "Chemical Bonding",
  "Motion in One Dimension",
  "Newton's Laws and Forces",
  "Momentum and Impulse",
  "Energy and Work",
  "Waves, Sound, and Light",
  "Electromagnetic Radiation",
  "Electricity and Magnetism",
  "Electrostatics",
  "Electrical Circuits",
  "Electromagnetism",
  "Optics",
  "Thermal Physics",
  "Heat Transfer",
  "Thermal Properties of Matter",
  "Nuclear Physics",
  "Radioactivity",
  "Nuclear Reactions"
];

export const physSciGrade11 = [
  "Matter and Materials",
  "Atoms, Elements, and Compounds",
  "Chemical Reactions",
  "Quantitative Aspects of Chemical Change",
  "Momentum and Impulse",
  "Mechanics",
  "Waves, Sound, and Light",
  "Electromagnetic Radiation",
  "Electricity and Magnetism",
  "Electrostatics",
  "Electrical Circuits",
  "Thermal Physics",
  "Heat Transfer",
  "Thermal Properties of Matter",
  "Nuclear Physics",
  "Radioactivity",
  "Nuclear Reactions"
];

export const physSciGrade12 = [
  "Atomic Combinations",
  "Chemical Equilibrium",
  "Acids, Bases, and Salts",
  "Redox Reactions",
  "Chemical Industries",
  "Mechanical Systems",
  "Electrostatics",
  "Current Electricity",
  "Magnetism and Electromagnetism",
  "Electromagnetic Induction",
  "Waves, Sound, and Light",
  "Geometrical Optics",
  "Electrostatic Fields",
  "Magnetic Fields",
  "Electromagnetic Fields",
  "Nuclear Physics",
  "Radioactivity",
  "Nuclear Reactions"
];



export function getTopics(grade, subject) { 
    if (grade == 10) {
        return getTopicArrays(subject)[0]
    } else if (grade == 11) {
        return getTopicArrays(subject)[1]
    } else if (grade == 12) { 
        return getTopicArrays(subject)[2]
    }
}


export function getTopicArrays(subject) { 
    switch (subject.toLowerCase()) { 
        case "physics":
            return [physSciGrade10, physSciGrade11, physSciGrade12]
        case "mathematics":
            return [mathGrade10,mathGrade11, mathGrade12]
    }
}