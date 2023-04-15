import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInjection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.263 2.287a.728.728 0 0 0-.542.917c.039.145.136.266.562.697l.515.521-1.203 1.199c-.662.659-1.228 1.257-1.259 1.328-.172.395.081.897.511 1.013a.687.687 0 0 0 .368-.004c.196-.046.257-.1 1.426-1.263l1.221-1.214.479.482c.263.265.525.507.58.536a.75.75 0 0 0 .884-.134.696.696 0 0 0 .193-.7c-.046-.198-.101-.259-1.553-1.718-.828-.832-1.568-1.545-1.645-1.584a.738.738 0 0 0-.537-.076m-9.576 9.049c-.582.589-.733.789-.85 1.123-.115.328-.369 2.193-.341 2.504.042.473.198.834.503 1.168.255.28.506.439.861.547.394.121.751.11 1.873-.055 1.441-.211 1.122.005 3.537-2.399 1.106-1.101 2.01-2.011 2.01-2.023 0-.012-1.583-.338-3.518-.725l-3.518-.703-.557.563'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInjection);
export default ForwardRef;
