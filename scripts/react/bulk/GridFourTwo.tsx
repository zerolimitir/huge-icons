import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGridFourTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.58 2.047c-.721.138-1.381.801-1.536 1.545-.06.289-.06 3.527 0 3.816.077.368.266.709.552.996.287.286.628.475.996.552.294.061 5.522.061 5.816 0a2.062 2.062 0 0 0 1.548-1.548c.06-.289.06-3.527 0-3.816-.159-.762-.818-1.411-1.573-1.549-.3-.054-5.514-.051-5.803.004m11.04 12.994c-.702.147-1.249.622-1.514 1.315-.083.218-.086.277-.086 2.144 0 1.88.002 1.925.088 2.15a2.115 2.115 0 0 0 1.248 1.244c.222.085.254.086 3.144.086 2.91 0 2.921 0 3.15-.088a2.11 2.11 0 0 0 1.244-1.248c.083-.218.086-.277.086-2.144s-.003-1.926-.086-2.144a2.112 2.112 0 0 0-1.244-1.248c-.228-.086-.256-.087-3.05-.094-1.551-.004-2.892.008-2.98.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGridFourTwo);
export default ForwardRef;
