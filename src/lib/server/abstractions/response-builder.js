import {error} from "@sveltejs/kit";


export class ResponseBuilder {
    build(body) {

        return new Response(body);
    }

    throw(status,  body) {
        switch (status) {
            case 400:
                return error()
        }
    }
}