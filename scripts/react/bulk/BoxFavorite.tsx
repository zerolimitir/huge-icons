import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m8.011 10.309c-1.013.22-1.687 1.289-1.431 2.271.125.483.205.585 1.411 1.795C17.34 21.643 17.365 21.66 18 21.66c.635 0 .66-.017 2.009-1.373 1.206-1.21 1.286-1.312 1.411-1.795.166-.634-.05-1.332-.556-1.8-.758-.702-1.798-.688-2.599.035l-.265.239-.265-.239a2.003 2.003 0 0 0-.942-.506c-.304-.072-.454-.072-.782 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxFavorite);
export default ForwardRef;
