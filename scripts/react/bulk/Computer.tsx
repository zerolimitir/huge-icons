import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgComputer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.7 14.316a.745.745 0 0 0 .029 1.382c.122.051.348.062 1.271.062 1.201 0 1.299-.014 1.515-.212.401-.369.272-1.03-.244-1.246-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075m.54 5.301v1.618l-1.233.012-1.233.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.233-.013-1.233-.012V18h-1.52v1.617'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputer);
export default ForwardRef;
