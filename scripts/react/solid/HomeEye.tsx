import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 2.025a4.519 4.519 0 0 0-1.682.622c-.181.116-3.694 2.984-5.253 4.289-.865.724-1.349 1.53-1.526 2.539-.088.499-.088 8.671 0 9.17a4.017 4.017 0 0 0 3.168 3.272c.398.081.507.083 5.773.083s5.375-.002 5.773-.083a4.017 4.017 0 0 0 3.168-3.272c.088-.499.088-8.671 0-9.17-.177-1.009-.661-1.815-1.526-2.539-1.559-1.305-5.072-4.173-5.253-4.289a4.586 4.586 0 0 0-1.202-.525c-.335-.084-1.124-.138-1.44-.097m1.023 9.018c.904.126 1.872.582 2.837 1.338.843.66 1.077 1.012 1.077 1.619 0 .591-.204.912-.986 1.551C14.338 16.477 13.085 17 12 17s-2.338-.523-3.471-1.449c-.516-.421-.721-.646-.859-.938-.114-.241-.129-.313-.129-.613 0-.605.241-.967 1.079-1.62 1.372-1.07 2.668-1.512 3.923-1.337m-.879 2.02a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeEye);
export default ForwardRef;
