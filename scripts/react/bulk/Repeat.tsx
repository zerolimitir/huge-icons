import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRepeat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.807 11.289c-.249.053-.465.281-.523.549-.024.113-.044.516-.044.894-.001.546-.017.756-.079 1.017a3.128 3.128 0 0 1-.926 1.593c-.462.439-.891.676-1.486.819-.315.075-.485.078-4.126.079H6.825l.387-.394c.405-.412.509-.583.507-.835-.001-.173-.112-.439-.225-.539a.794.794 0 0 0-.834-.116c-.201.094-1.608 1.511-1.751 1.764-.318.56-.3 1.293.045 1.83.067.104.469.534.894.955.711.705.787.768.962.805.578.122 1.023-.322.9-.898-.035-.163-.096-.245-.461-.62l-.422-.432h3.602c2.208 0 3.759-.016 4.008-.042 2.302-.236 4.045-1.979 4.281-4.281.053-.515.052-1.363-.001-1.596-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRepeat);
export default ForwardRef;
