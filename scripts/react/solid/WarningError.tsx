import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWarningError = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.48 3.062a2.272 2.272 0 0 0-1.138.636c-.272.276-.426.54-4.182 7.135-2.145 3.767-3.951 6.977-4.013 7.135-.313.791-.103 1.717.533 2.352a2.2 2.2 0 0 0 1.064.601c.302.077.473.079 8.256.079s7.954-.002 8.256-.079c.849-.217 1.469-.849 1.689-1.721a2.197 2.197 0 0 0-.074-1.18c-.061-.172-1.605-2.924-4.018-7.16-3.757-6.596-3.93-6.892-4.198-7.164a2.323 2.323 0 0 0-2.175-.634m.925 5.319c.08.051.188.162.24.246l.095.153v5.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V8.78l.093-.149c.233-.375.691-.484 1.052-.25m-.065 7.685c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWarningError);
export default ForwardRef;
