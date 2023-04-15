import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLifebuoy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.485 4.054c-.71.82-1.159 1.739-1.39 2.846-.071.341-.075.615-.075 5.1 0 4.485.004 4.759.075 5.1a6.201 6.201 0 0 0 1.394 2.85l.251.29 2.707-2.707 2.707-2.707-.17-.203a4.39 4.39 0 0 1-.871-1.685c-.126-.509-.126-1.367 0-1.876a4.386 4.386 0 0 1 .88-1.696l.179-.213-2.696-2.697A262.143 262.143 0 0 0 3.76 3.76c-.011 0-.135.132-.275.294m14.038 2.403-2.697 2.698.18.212a4.37 4.37 0 0 1 .881 1.695c.126.509.126 1.367 0 1.876a4.353 4.353 0 0 1-.872 1.684l-.171.202 2.708 2.708 2.708 2.708.255-.294c.71-.82 1.159-1.739 1.39-2.846.071-.341.075-.615.075-5.1 0-4.485-.004-4.759-.075-5.1-.171-.819-.483-1.583-.901-2.207-.212-.317-.688-.897-.757-.923-.015-.006-1.241 1.204-2.724 2.687'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLifebuoy);
export default ForwardRef;
