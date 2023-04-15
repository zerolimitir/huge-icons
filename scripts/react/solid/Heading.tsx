import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeading = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.811 4.278a.883.883 0 0 0-.481.374c-.066.12-.071.556-.08 7.262-.008 5.12.002 7.181.033 7.299a.804.804 0 0 0 .515.506c.4.108.812-.12.92-.51.027-.097.042-1.256.042-3.299v-3.15h10.48v3.15c0 2.043.015 3.202.042 3.299.108.39.52.618.92.51a.804.804 0 0 0 .515-.506c.031-.118.041-2.179.033-7.299-.01-7.108-.01-7.135-.092-7.273a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.081.137-.082.196-.093 3.369l-.011 3.23H6.762l-.011-3.23c-.011-3.173-.012-3.232-.093-3.369a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeading);
export default ForwardRef;
