<script>
import Tree from "./Tree.vue";

export default {
  name: "SecondPart",
  components: { Tree },
  data() {
    return {
      nestedObject: {
        address: {
          street: "Downing St.",
          details: {
            apartment: "C",
            floor: 2,
            code: "2938B",
          },
          country: "UK",
        },
        miscInfo: {
          socialMedia: {
            facebook: {
              history: {
                allHistory: {
                  2020: {
                    events: "0 events :(",
                  },
                  2019: {
                    allMyData: "isnt safe",
                    events: "12 events",
                  },
                  2018: {
                    allMyData: "Never Forget",
                    events: "234 events",
                  },
                },
              },
            },
            twitter: {
              feed: "1234 tweets",
              likes: "1234 likes",
              pinnedTweet: {
                hashtag: "#someHashTag",
                handle: "@itsamemario",
                text: "Very funny joke",
              },
            },
            name: "pseudo2000",
          },
        },
        firstName: "Hello",
        lastName: "World",
      },
      // If the object changes, your code should work
      // nestedObject: {
      //   somethingElse: {
      //     key2: {
      //       nested: {
      //         more: "nesting"
      //       }
      //     },
      //     hop: "hophop"
      //   },
      //   yipeee: "yeah"
      // }
    };
  },
};
</script>
<template>
  <div>
    <!--
          Idée 1: un composant "editField et un composant editObject + recursion"

          Problème: comment on gère l'unicité des donnés ? Idée: avec un store.
          => overengineering ? A la recherche de qqch de plus simple.
    -->
    <!-- Your code here -->
    <Tree :obj="nestedObject" />
  </div>
</template> 

<style lang="css">
</style>
