import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 4.278c-.553.135-.743.84-.336 1.246.195.196.364.236.998.236.525 0 .532.001.505.085-.029.094-3.538 12.371-3.538 12.381 0 .004-.375.013-.833.021l-.833.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832-.163-.108-.188-.112-.782-.126-.595-.014-.614-.017-.589-.095.035-.112 3.537-12.369 3.537-12.381 0-.005.338-.01.75-.01.424 0 .819-.02.909-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgItalic);
export default ForwardRef;
