import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalFilmstripDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 2.04a4.037 4.037 0 0 0-3.262 2.928c-.093.33-.107.465-.124 1.202l-.02.83H6.28V2l-.35.005a4.46 4.46 0 0 0-.533.035M7.72 4.5V7h3.52v10H7.72v5h3.56v-5h1.44v5h3.56v-5h-3.52V7h3.52V2h-3.56v5h-1.44V2H7.72v2.5m10-.006V7H22v-.684c0-.777-.08-1.281-.285-1.796a4 4 0 0 0-3.525-2.508l-.47-.024v2.506M2.011 17.83c.017.741.031.871.126 1.208a4.05 4.05 0 0 0 2.383 2.677c.398.158 1.036.285 1.436.285h.324v-5H1.991l.02.83m15.709 1.676v2.505l.45-.022a3.997 3.997 0 0 0 3.547-2.516c.203-.506.283-1.013.283-1.789V17h-4.28v2.506'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalFilmstripDashed);
export default ForwardRef;
