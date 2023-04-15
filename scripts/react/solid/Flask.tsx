import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.811 1.278c-.552.134-.743.84-.336 1.246.195.196.364.236.995.236h.531L9.99 5.523l-.01 2.762-.415.157a7.122 7.122 0 0 0-3.227 2.443 2.41 2.41 0 0 0-.217.325c-.001.017 2.645.03 5.879.03 3.234 0 5.88-.013 5.88-.03s-.108-.174-.239-.349a7.054 7.054 0 0 0-3.206-2.419l-.415-.157-.01-2.762-.011-2.763h.531c.631 0 .8-.04.995-.236.345-.345.285-.877-.13-1.152l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024M5.284 13.03c-.964 3.26.586 6.758 3.656 8.25 1.715.834 3.554.941 5.375.313 3.493-1.203 5.451-5.013 4.401-8.563l-.079-.27H5.363l-.079.27'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
