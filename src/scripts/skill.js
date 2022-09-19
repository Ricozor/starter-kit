import {ToolsHelper} from "./tools-helper";

const SkillScript = () => {
    const options = {
        window: { height: 0 },
        scrollTop: 0,
        skill: null,
        skillsRef: [],
        skillTop: 0,
        isActive: false,
    };
    const onResize = () => {
        options.window.height = window.innerHeight;

        options.skillsRef.forEach((skill) => {
            const offset = ToolsHelper.getPos(skill.skill, false);
            skill.top = offset.top;
        });

        onScroll();
    };
    let ticking = false;
    const onScroll = () => {
        options.scrollTop = document.documentElement.scrollTop || window.pageYOffset;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkViewportIn();
                ticking = false;
            });
        }
        ticking = true;
    };

    const checkViewportIn = () => {

        // TODO:OPTIM: animates numbers 0% to end value
        // TODO:OPTIM: trigger on bottom enter in viewport
        options.skillsRef.forEach((el) => {
            if (options.scrollTop >= el.top - options.window.height * 0.95) {
                el.skill.classList.add('isInViewport');
            }
        });
    };

    const skills = document.querySelectorAll('.Skill');

    skills.forEach(skill => {
        options.skillsRef.push({
            skill
        });
    });

    onResize();
    document.addEventListener('scroll', onScroll, false);
    window.addEventListener('resize', onResize, false);
}

export {
    SkillScript,
}
