let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course');

    const title = document.createElement('div');
    title.classList.add('course-title');
    title.innerText = course.title;

    const durationBlock = document.createElement('div');
    durationBlock.classList.add('course-duration');

    const month = document.createElement('div');
    month.classList.add('month');
    month.innerText = `Month duration: ${course.monthDuration}`;

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerText = `Hour duration: ${course.hourDuration}`;

    durationBlock.append(month, hours);

    const modules = document.createElement('div');
    modules.classList.add('modules-list');
    const ul = document.createElement('ul');

    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }

    modules.appendChild(ul);

    courseBlock.append(title, durationBlock, modules);
    document.body.appendChild(courseBlock);
}