import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLibrary = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.328 2.04a4.99 4.99 0 0 0-2.939 1.518c-.67.703-1.086 1.5-1.296 2.482-.099.462-.098 1.317.002 1.68.359 1.308 1.489 2.925 3.395 4.859l.749.761.011 4.2.01 4.2.22.12c.189.103.262.12.52.12s.331-.017.52-.12l.22-.12.01-4.205.01-4.205.654-.655c2.069-2.076 3.26-3.814 3.529-5.154.153-.76-.037-1.874-.465-2.732-.252-.508-.512-.864-.958-1.313-.729-.735-1.496-1.152-2.54-1.382-.33-.073-1.293-.104-1.652-.054m1.164 3.547c.339.107.673.405.849.755.445.89-.12 1.975-1.113 2.137-.978.159-1.866-.729-1.707-1.707.125-.766.854-1.343 1.599-1.265.099.011.266.047.372.08'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLibrary);
export default ForwardRef;
