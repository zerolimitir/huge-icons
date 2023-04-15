import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicQuaver = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.214 1.484c-.845.141-1.531.797-1.86 1.776l-.094.28-.011 4.77-.011 4.77-.363-.32c-.871-.769-1.814-1.228-2.935-1.428-.468-.083-1.399-.082-1.88.002-1.846.323-3.377 1.452-4.198 3.097a5.743 5.743 0 0 0 2.563 7.706 5.715 5.715 0 0 0 5.146 0 5.746 5.746 0 0 0 2.889-3.35c.288-.862.273-.541.289-6.032l.014-4.945.267.056c2.178.457 4.401 2.519 5.586 5.181.166.374.318.553.553.651a.582.582 0 0 0 .531-.013c.276-.125.389-.298.591-.909a8.612 8.612 0 0 0 .007-5.528 8.74 8.74 0 0 0-5.543-5.546c-.769-.252-1.077-.296-1.541-.218'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaver);
export default ForwardRef;
