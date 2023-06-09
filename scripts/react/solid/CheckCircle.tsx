import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m5.2 6.315a.708.708 0 0 1 .391.597 1.02 1.02 0 0 1-.024.333c-.022.057-.988 1.322-2.146 2.811-1.482 1.906-2.16 2.748-2.293 2.845a1.791 1.791 0 0 1-1.568.26 1.973 1.973 0 0 1-.453-.215c-.096-.069-.779-.67-1.518-1.337-1.474-1.329-1.502-1.363-1.459-1.748.056-.502.628-.811 1.06-.573.093.051.752.619 1.465 1.261.713.643 1.342 1.18 1.399 1.194.076.019.125.002.194-.068.051-.052.999-1.26 2.106-2.685 1.522-1.958 2.05-2.61 2.16-2.668.191-.101.504-.104.686-.007'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckCircle);
export default ForwardRef;
