import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 8.316a.734.734 0 0 0-.398.413c-.053.128-.062.448-.062 2.298v2.149l-.45-.443c-.401-.395-.471-.448-.646-.485a.75.75 0 0 0-.886.533c-.052.178-.052.226 0 .401.053.177.146.284.891 1.022.457.452.894.86.971.905a1.823 1.823 0 0 0 1.76 0c.077-.045.514-.453.971-.905.73-.724.839-.847.888-1.014a.75.75 0 0 0-.884-.941c-.174.036-.244.089-.645.484l-.45.443-.001-2.158c-.001-2.013-.006-2.169-.075-2.318-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatArrowDown);
export default ForwardRef;
