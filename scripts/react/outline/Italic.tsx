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
            d='M11.811 4.278c-.553.135-.743.84-.336 1.246.195.196.364.236.998.236.488 0 .531.006.511.07L11.28 11.8c-.927 3.245-1.72 6.022-1.764 6.17l-.079.27H8.74c-.383 0-.789.02-.902.044-.758.163-.758 1.269 0 1.432.283.06 4.041.06 4.324 0 .563-.121.767-.827.358-1.236-.192-.192-.4-.24-1.045-.24-.439 0-.479-.006-.459-.07l1.704-5.97c.927-3.245 1.72-6.021 1.764-6.17l.079-.27h.749c.422 0 .817-.02.907-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgItalic);
export default ForwardRef;
