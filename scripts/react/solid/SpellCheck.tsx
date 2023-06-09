import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpellCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.807 3.279a.896.896 0 0 0-.28.15c-.137.11-.313.515-2.676 6.174-1.39 3.331-2.548 6.127-2.572 6.212-.155.541.367 1.054.92.905.349-.094.374-.138 1.199-2.12l.757-1.82h5.69l.757 1.817c.417 1 .798 1.861.848 1.914a.746.746 0 0 0 1.075.014.716.716 0 0 0 .205-.665c-.042-.179-5.024-12.149-5.114-12.29-.143-.223-.525-.36-.809-.291m1.301 5.331 1.087 2.61-1.098.011c-.603.005-1.591.005-2.194 0l-1.098-.011 1.087-2.61C8.49 7.175 8.989 6 9 6c.011 0 .51 1.175 1.108 2.61m9.606 4.692c-.103.045-.897.859-2.731 2.801-2.272 2.405-2.6 2.737-2.703 2.737-.096 0-.341-.203-1.428-1.184-.722-.651-1.38-1.23-1.464-1.286-.12-.082-.201-.103-.385-.103a.699.699 0 0 0-.634.342.81.81 0 0 0-.053.704c.069.164 2.843 2.67 3.125 2.824.574.312 1.323.272 1.834-.098.249-.18 5.335-5.579 5.416-5.75.149-.313.03-.717-.273-.925-.172-.117-.507-.147-.704-.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpellCheck);
export default ForwardRef;
